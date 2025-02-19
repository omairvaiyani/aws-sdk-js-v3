import { Paginator } from "@aws-sdk/types";

import {
  ListModelPackageGroupsCommand,
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput,
} from "../commands/ListModelPackageGroupsCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListModelPackageGroupsCommandInput,
  ...args: any
): Promise<ListModelPackageGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelPackageGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListModelPackageGroupsCommandInput,
  ...args: any
): Promise<ListModelPackageGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listModelPackageGroups(input, ...args);
};
export async function* paginateListModelPackageGroups(
  config: SageMakerPaginationConfiguration,
  input: ListModelPackageGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelPackageGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelPackageGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
