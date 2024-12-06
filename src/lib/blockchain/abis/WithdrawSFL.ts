export default [
  {
    inputs: [
      {
        internalType: "contract SunflowerLandToken",
        name: "_token",
        type: "address",
      },
      { internalType: "address", name: "_teamAddress", type: "address" },
      { internalType: "address", name: "_communityAddress", type: "address" },
      { internalType: "address", name: "_signer", type: "address" },
      {
        internalType: "contract SunflowerLandSessionManager",
        name: "_session",
        type: "address",
      },
      {
        internalType: "contract SunflowerLand",
        name: "_farm",
        type: "address",
      },
      {
        internalType: "contract SunflowerFees",
        name: "_fees",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "_game", type: "address" }],
    name: "addGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "communityAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "executed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "farm",
    outputs: [
      { internalType: "contract SunflowerLand", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fees",
    outputs: [
      { internalType: "contract SunflowerFees", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_game", type: "address" }],
    name: "gameAddGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_game", type: "address" }],
    name: "gameRemoveGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "gameRoles",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_game", type: "address" }],
    name: "removeGameRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_communityAddress", type: "address" },
    ],
    name: "setCommunityAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_teamAddress", type: "address" },
    ],
    name: "setTeamAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "teamAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract SunflowerLandToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "signature", type: "bytes" },
      { internalType: "bytes32", name: "sessionId", type: "bytes32" },
      { internalType: "bytes32", name: "nextSessionId", type: "bytes32" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint256", name: "farmId", type: "uint256" },
      { internalType: "uint256", name: "sfl", type: "uint256" },
      { internalType: "uint256", name: "playerAmount", type: "uint256" },
      { internalType: "uint256", name: "teamAmount", type: "uint256" },
      { internalType: "uint256", name: "amountOutMinimum", type: "uint256" },
    ],
    name: "withdrawSFL",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;