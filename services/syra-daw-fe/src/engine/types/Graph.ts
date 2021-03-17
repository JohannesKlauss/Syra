import { ChannelType } from "../../types/Channel";

export enum SyraGraphEndpointType {
  INPUT,
  OUTPUT,
  AUX_SEND,
}

export interface SyraGraphNode {
  id: string;
  label: string;
  type: ChannelType;
}

export interface SyraGraphEndpoint {
  id: string;
  type: SyraGraphEndpointType;
}

export interface SyraGraphEdge {
  id: string;
  source: SyraGraphEndpoint;
  destination: SyraGraphEndpoint;
}