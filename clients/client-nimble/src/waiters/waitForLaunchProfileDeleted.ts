import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetLaunchProfileCommand, GetLaunchProfileCommandInput } from "../commands/GetLaunchProfileCommand";
import { NimbleClient } from "../NimbleClient";

const checkState = async (client: NimbleClient, input: GetLaunchProfileCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetLaunchProfileCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.launchProfile.state;
      };
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.launchProfile.state;
      };
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a LaunchProfile is Deleted. Use this after invoking DeleteLaunchProfile
 *  @deprecated Use waitUntilLaunchProfileDeleted instead. waitForLaunchProfileDeleted does not throw error in non-success cases.
 */
export const waitForLaunchProfileDeleted = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetLaunchProfileCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 750 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a LaunchProfile is Deleted. Use this after invoking DeleteLaunchProfile
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetLaunchProfileCommand for polling.
 */
export const waitUntilLaunchProfileDeleted = async (
  params: WaiterConfiguration<NimbleClient>,
  input: GetLaunchProfileCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 750 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
