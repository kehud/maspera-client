export interface IToken {
    ".expires": string;
    ".issued": string;
    access_token: string;
    expires_in: number;
    token_type: string;
  }