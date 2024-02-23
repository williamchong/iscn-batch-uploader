import{l as f,m as l}from"./sync.f8b252c7.js";import{I as m}from"./entry.29545139.js";var r={},u=f&&f.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});r.formatMsgSellNFT=r.formatMsgDeleteOffer=r.formatMsgUpdateOffer=r.formatMsgCreateOffer=r.formatMsgBuyNFT=r.formatMsgDeleteListing=r.formatMsgUpdateListing=h=r.formatMsgCreateListing=r.formatMsgDeleteRoyaltyConfig=r.formatMsgUpdateRoyaltyConfig=r.formatMsgCreateRoyaltyConfig=r.formatMsgBurnNFT=d=r.formatMsgSend=r.formatMsgMintNFT=r.formatMsgUpdateClass=r.formatMsgNewClass=void 0;const o=u(l),g=m;function c(t,a,e,s){return{typeUrl:"/likechain.likenft.v1.MsgNewClass",value:{creator:t,parent:{type:1,iscnIdPrefix:a},input:{name:e.name,symbol:e.symbol,description:e.description,uri:e.uri,uriHash:e.uriHash,metadata:g.Buffer.from(JSON.stringify(Object.assign({},e.metadata||{})),"utf8"),config:s||{burnable:!0}}}}}r.formatMsgNewClass=c;function M(t,a,e,s){return{typeUrl:"/likechain.likenft.v1.MsgUpdateClass",value:{creator:t,classId:a,input:Object.assign(Object.assign({},e),{config:s||{burnable:!0}})}}}r.formatMsgUpdateClass=M;function p(t,a,e){return{typeUrl:"/likechain.likenft.v1.MsgMintNFT",value:{creator:t,classId:a,id:e.id,input:{uri:e.uri,uriHash:e.uriHash,metadata:g.Buffer.from(JSON.stringify(Object.assign({},e.metadata||{})),"utf8")}}}}r.formatMsgMintNFT=p;function y(t,a,e,s){return{typeUrl:"/cosmos.nft.v1beta1.MsgSend",value:{sender:t,receiver:a,classId:e,id:s}}}var d=r.formatMsgSend=y;function v(t,a,e){return{typeUrl:"/likechain.likenft.v1.MsgBurnNFT",value:{creator:t,classId:a,nftId:e}}}r.formatMsgBurnNFT=v;function U(t,a,e){return{typeUrl:"/likechain.likenft.v1.MsgCreateRoyaltyConfig",value:{creator:t,classId:a,royaltyConfig:e}}}r.formatMsgCreateRoyaltyConfig=U;function k(t,a,e){return{typeUrl:"/likechain.likenft.v1.MsgUpdateRoyaltyConfig",value:{creator:t,classId:a,royaltyConfig:e}}}r.formatMsgUpdateRoyaltyConfig=k;function C(t,a){return{typeUrl:"/likechain.likenft.v1.MsgDeleteRoyaltyConfig",value:{creator:t,classId:a}}}r.formatMsgDeleteRoyaltyConfig=C;function N(t,a,e,s,n){return{typeUrl:"/likechain.likenft.v1.MsgCreateListing",value:{creator:t,classId:a,nftId:e,price:o.default.fromString(s),expiration:n?new Date(n):new Date(Date.now()+15552e3)}}}var h=r.formatMsgCreateListing=N;function O(t,a,e,s,n){return{typeUrl:"/likechain.likenft.v1.MsgUpdateListing",value:{creator:t,classId:a,nftId:e,price:o.default.fromString(s),expiration:n?new Date(n):new Date(Date.now()+15552e3)}}}r.formatMsgUpdateListing=O;function D(t,a,e){return{typeUrl:"/likechain.likenft.v1.MsgDeleteListing",value:{creator:t,classId:a,nftId:e}}}r.formatMsgDeleteListing=D;function S(t,a,e,s,n){return{typeUrl:"/likechain.likenft.v1.MsgBuyNFT",value:{creator:t,classId:a,nftId:e,seller:s,price:o.default.fromString(n)}}}r.formatMsgBuyNFT=S;function w(t,a,e,s,n){return{typeUrl:"/likechain.likenft.v1.MsgCreateOffer",value:{creator:t,classId:a,nftId:e,price:o.default.fromString(s),expiration:n?new Date(n):new Date(Date.now()+15552e3)}}}r.formatMsgCreateOffer=w;function F(t,a,e,s,n){return{typeUrl:"/likechain.likenft.v1.MsgUpdateOffer",value:{creator:t,classId:a,nftId:e,price:o.default.fromString(s),expiration:n?new Date(n):new Date(Date.now()+15552e3)}}}r.formatMsgUpdateOffer=F;function T(t,a,e){return{typeUrl:"/likechain.likenft.v1.MsgDeleteOffer",value:{creator:t,classId:a,nftId:e}}}r.formatMsgDeleteOffer=T;function b(t,a,e,s,n){return{typeUrl:"/likechain.likenft.v1.MsgSellNFT",value:{creator:t,classId:a,nftId:e,buyer:s,price:o.default.fromString(n)}}}r.formatMsgSellNFT=b;export{d as a,h as f};
