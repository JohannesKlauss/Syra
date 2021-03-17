import atomWithEffects from "./proxy/atomWithEffects";
import { SyraGraphEdge, SyraGraphNode } from "../engine/types/Graph";
import { selectorFamily } from "recoil";
import { syncEffectsComb } from "./effects/syncEffectsComb";

const nodes = atomWithEffects<SyraGraphNode[]>({
  key: 'engine/nodes',
  default: [],
  effects: [
    ...syncEffectsComb,
  ],
});

const edges = atomWithEffects<SyraGraphEdge[]>({
  key: 'engine/edges',
  default: [],
  effects: [
    ...syncEffectsComb,
  ],
});

const nodeById = selectorFamily<SyraGraphNode | undefined, string>({
  key: 'engine/nodeById',
  get: id => ({get}) => get(nodes).find(node => node.id === id),
});

const edgeById = selectorFamily<SyraGraphEdge | undefined, string>({
  key: 'engine/edgeById',
  get: id => ({get}) => get(edges).find(edge => edge.id === id),
});

export const engineStore = {
  nodes,
  edges,
  nodeById,
  edgeById,
};