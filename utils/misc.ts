import { toUtf8 } from "@cosmjs/encoding";
import { WCredentialPrimaryPubKey, WCredentialPubKey, WSubProofReqParams } from "~/interfaces/launchpad";
import { BigNumberBytes, WBTreeSetForString, WMap, WSubProofReq } from "~/interfaces/vcverifier";

export function parseSubProofReqParam(input: string): WSubProofReqParams {
  const subPR: WSubProofReqParams = JSON.parse(input);

  let params: WSubProofReqParams = {
    credential_pub_key: parseCredPubKey(JSON.stringify(subPR.credential_pub_key)),
    credential_schema: subPR.credential_schema,
    non_credential_schema: subPR.non_credential_schema,
    rev_key_pub: null,
    rev_reg: null,
    sub_proof_request: parseSubProofReq(JSON.stringify(subPR.sub_proof_request)),
  };
  return params;
}

export function parseCredPubKey(input: string): WCredentialPubKey {
  const cpk = JSON.parse(input);
  const pkey = cpk.p_key;
  const p_key: WCredentialPrimaryPubKey = {
    n: toBigNumberBytes(pkey.n),
    r: toWMap(pkey.r),
    rctxt: toBigNumberBytes(pkey.rctxt),
    s: toBigNumberBytes(pkey.s),
    z: toBigNumberBytes(pkey.z),
  };
  return {
    p_key,
  };
}

export function toBigNumberBytes(s: string | any): BigNumberBytes {
  return s as string;
}

export function parseSubProofReq(input: string): WSubProofReq {
  const subPR = JSON.parse(input);
  // TODO predicates
  const revealed_attrs: WBTreeSetForString = subPR.revealed_attrs;
  return {
    revealed_attrs,
    predicates: [],
  };
}

export function toWMap(e: {}): WMap {
  // export type WMap = [number[], BigNumberBytes][];
  let w_map: WMap = [];
  Object.entries(e).forEach(([key, value]) => {
    w_map.push([Array.from(toUtf8(key)), toBigNumberBytes(value)]);
  });
  return w_map;
}
