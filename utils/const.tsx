/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export const textSteps = ["Step 1: Define RG-Token", "Step 2: Define Proofs", "Step 3: Final Preview", "Application sent"];
export const timeLineTexts = [
  {
    title: "Step 1",
    text: "Decide if you want the rgToken to be new (provide mint price and cap)  or a wrapper  of an existing one (provide denom). In both cases, provide token details such as denom, marketing info.",
  },
  {
    title: "Step 2",
    text: "You can now choose the proofs required from the holders to interact with you rgToken. We use AnonCreds to power the ZK-proof, which supports selective disclosure and range proofs",
  },
  {
    title: "Step 3",
    text: "This is a review step, which allows you to have an overview of everything you have input. As soon as the token is launched, it is registered on our adapter and your users can the native rgTokens immediately.",
  },
];

export const faqsQuestions = [
  {
    title: "What does AVIPAD do?",
    content: (
      <div className="text-sm text-gray-600">
        <p>AVIPAD helps asset originators launch rgTokens (regulatory grade).</p>
        <p>It provides the tool to transform existing tokens to rgTokens and to mint new tokens.</p>
        <p>It also provides an adaptor for rgToken -{">"} native rgTokens to be used onchain, such as in DEXs.</p>
      </div>
    ),
  },
  {
    title: "What is special about rgTokens?",
    content: (
      <div className="text-sm text-gray-600">
        <p>rgTokens is regular tokens with withdrawal screeening.</p>
        <p>Asset holders must present the zkProof of credential ownership that satisfy the rgToken’s requirements.</p>
        <p>Proof requirements are defined at asset origination and can be updated.</p>
      </div>
    ),
  },
  {
    title: "What does transforming a token mean?",
    content: (
      <div className="text-sm text-gray-600">
        <p>Transforming a token means you lock the native token and AVIPAD will provide you with the rg’d version of the token.</p>
        <p>Transform requires ZK proof of credential ownership</p>
      </div>
    ),
  },
  {
    title: "What does adapting a token mean?",
    content: (
      <div className="text-sm text-gray-600">
        <p>rgTokens are built with Cosmwasm smart contracts, very similar to cw20.</p>
        <p>In order to use it on DEXs, we provide an adaptor that turns rgToken -{">"} native rgTokens.</p>
      </div>
    ),
  },
  {
    title: "How does this help the network / DEXs / dApps?",
    content: (
      <div className="text-sm text-gray-600">
        <p>AVIPAD provides optionality to all involving parties.</p>
        <p>By having a flexible model for rgToken requirements and an native token adapter, applications can identity which denom are rg’ed,</p>
        <p>allowing those rgTokens to be traded, spent or used in a ecosystem that self regulates.</p>
      </div>
    ),
  },
  {
    title: "What does AVIPAD stand for?",
    content: (
      <div className="text-sm text-gray-600">
        <p>AVIPAD is a launch"pad" for rgTokens built on the AVIDA framework.</p>
        <p>AVIDA stands for Atomic Verification of Identity for Decentralised Applications.</p>
      </div>
    ),
  },
  {
    title: "What is a Vectis Account and why do I need the identity plugin?",
    content: (
      <div className="text-sm text-gray-600">
        <p>Vectis is an account abstraction infrastructure currently implemented in Cosmwasm.</p>
        <p>Its basic features are social recovery, account freezing and gasless metatransaction supports.</p>
        <p>Features can be extended by installing plugins.</p>
        <p>The Identity plugin links the offchain credential to the onchain account to prevent sybil attack.</p>
      </div>
    ),
  },
  {
    title: "Why did we build this?",
    content: (
      <div className="text-sm text-gray-600">
        <p>AVIDA framework and its implementation - AVIPAD is built by Nymlab.</p>
        <p>
          It is our second product (after Vectis) that aims to empower people socially and financially in a legal and privacy-protecting
          environment.
        </p>
      </div>
    ),
  },
  {
    title: "How do I get involved?",
    content: (
      <div className="text-sm text-gray-600">
        <p>
          We are thrilled you are excited! Please do follow us on{" "}
          <Link href="https://twitter.com/VectisDAO" target="_blank" className="font-bold text-kashmir-blue-500 hover:text-java-green-600">
            twitter
          </Link>{" "}
          for updates.
        </p>
        <p>
          For partnership please email{" "}
          <Link href="mailto:dev@nymlab.it" target="_blank" className="font-bold text-kashmir-blue-500 hover:text-java-green-600">
            dev@nymlab.it
          </Link>
        </p>
      </div>
    ),
  },
];

export const stepsHelp = [
  [
    {
      title: "Basic Settings",
      content: (
        <>
          <p>
            Use the basic settings section to define general token parameters such as: the Token Name and Symbol, which are important for DEX,
            and the Initial Supply (plus decimals to be counted)
          </p>
        </>
      ),
    },
    {
      title: "RG-Token Configuration",
      content: (
        <div>
          <p>
            In this section you need to specify the Token Prospectus URL, where investores may retrieve all the needed infos, you also need to
            specify if a limit to the number of token per address applies
          </p>
        </div>
      ),
    },
  ],
  [
    {
      title: "Proof Requests",
      content: (
        <>
          <p>
            In this section you can specify the compliance requirements of the users who will handle your RG Token. Select the credential
            schemes that represent these requirements and, for each of them, decide which il attributes must be provided by the user by means of
            a la derived zero-knowledge proof
          </p>
          <p>
            Beside the general Token parameters, you should define if the Token Contract must support Burn and Mint of tokens, if the contract
            can be paused and if address blacklisting must be supported
          </p>
        </>
      ),
    },
    {
      title: "Issuers",
      content: (
        <>
          <p>
            Based on the credential schemas you selected, the list of issuers able to issue such credentials will automatically update. Once you
            have decided which credentials you need for your RG token, select from the list of compatible issuers those you consider trusted
          </p>
        </>
      ),
    },
  ],
  [
    {
      title: "Basic Settings",
      content: (
        <>
          <p>
            Use the basic settings section to define general token parameters such as: the Token Name and Symbol, which are important for DEX,
            and the Initial Supply (plus decimals to be counted)
          </p>
        </>
      ),
    },
    {
      title: "RG-Token Configuration",
      content: (
        <div>
          <p>
            In this section you need to specify the Token Prospectus URL, where investores may retrieve all the needed infos, you also need to
            specify if a limit to the number of token per address applies
          </p>
        </div>
      ),
    },
    {
      title: "Proof Requests",
      content: (
        <>
          <p>
            In this section you can specify the compliance requirements of the users who will handle your RG Token. Select the credential
            schemes that represent these requirements and, for each of them, decide which il attributes must be provided by the user by means of
            a la derived zero-knowledge proof
          </p>
          <p>
            Beside the general Token parameters, you should define if the Token Contract must support Burn and Mint of tokens, if the contract
            can be paused and if address blacklisting must be supported
          </p>
        </>
      ),
    },
    {
      title: "Issuers",
      content: (
        <>
          <p>
            Based on the credential schemas you selected, the list of issuers able to issue such credentials will automatically update. Once you
            have decided which credentials you need for your RG token, select from the list of compatible issuers those you consider trusted
          </p>
        </>
      ),
    },
  ],
  [],
];
