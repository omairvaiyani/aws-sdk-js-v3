import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "af-south-1": {
    variants: [
      {
        hostname: "s3.dualstack.af-south-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-east-1": {
    variants: [
      {
        hostname: "s3.dualstack.ap-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-northeast-1": {
    variants: [
      {
        hostname: "s3.ap-northeast-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3.dualstack.ap-northeast-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-northeast-2": {
    variants: [
      {
        hostname: "s3.dualstack.ap-northeast-2.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-northeast-3": {
    variants: [
      {
        hostname: "s3.dualstack.ap-northeast-3.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-south-1": {
    variants: [
      {
        hostname: "s3.dualstack.ap-south-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-southeast-1": {
    variants: [
      {
        hostname: "s3.ap-southeast-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3.dualstack.ap-southeast-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-southeast-2": {
    variants: [
      {
        hostname: "s3.ap-southeast-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3.dualstack.ap-southeast-2.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "ap-southeast-3": {
    variants: [
      {
        hostname: "s3.dualstack.ap-southeast-3.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-global": {
    variants: [
      {
        hostname: "s3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "ca-central-1": {
    variants: [
      {
        hostname: "s3-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-fips.dualstack.ca-central-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3.dualstack.ca-central-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "cn-north-1": {
    variants: [
      {
        hostname: "s3.dualstack.cn-north-1.amazonaws.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "cn-northwest-1": {
    variants: [
      {
        hostname: "s3.dualstack.cn-northwest-1.amazonaws.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-central-1": {
    variants: [
      {
        hostname: "s3.dualstack.eu-central-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-north-1": {
    variants: [
      {
        hostname: "s3.dualstack.eu-north-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-south-1": {
    variants: [
      {
        hostname: "s3.dualstack.eu-south-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-west-1": {
    variants: [
      {
        hostname: "s3.eu-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3.dualstack.eu-west-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-west-2": {
    variants: [
      {
        hostname: "s3.dualstack.eu-west-2.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "eu-west-3": {
    variants: [
      {
        hostname: "s3.dualstack.eu-west-3.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "me-south-1": {
    variants: [
      {
        hostname: "s3.dualstack.me-south-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "s3-external-1": {
    variants: [
      {
        hostname: "s3-external-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "sa-east-1": {
    variants: [
      {
        hostname: "s3.sa-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3.dualstack.sa-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "us-east-1": {
    variants: [
      {
        hostname: "s3.us-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-fips.dualstack.us-east-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "us-east-2": {
    variants: [
      {
        hostname: "s3-fips.dualstack.us-east-2.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-east-2.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "us-gov-east-1": {
    variants: [
      {
        hostname: "s3.us-gov-east-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-fips.us-gov-east-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-gov-east-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "us-gov-west-1": {
    variants: [
      {
        hostname: "s3.us-gov-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-fips.us-gov-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-gov-west-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "us-west-1": {
    variants: [
      {
        hostname: "s3.us-west-1.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-fips.dualstack.us-west-1.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-west-1.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "us-west-2": {
    variants: [
      {
        hostname: "s3.us-west-2.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-fips.dualstack.us-west-2.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3.dualstack.us-west-2.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "aws-global",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-ca-central-1",
      "fips-us-east-1",
      "fips-us-east-2",
      "fips-us-west-1",
      "fips-us-west-2",
      "me-south-1",
      "s3-external-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "s3.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-fips.dualstack.{region}.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3.dualstack.{region}.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "s3.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "s3-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "s3-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3.dualstack.{region}.amazonaws.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "s3.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "s3-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "s3.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "s3-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "s3.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "s3-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "s3-fips.dualstack.{region}.amazonaws.com",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "s3.dualstack.{region}.amazonaws.com",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "s3",
    regionHash,
    partitionHash,
  });
