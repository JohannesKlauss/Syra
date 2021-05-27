export class PluginChain {
  private plugins: AudioNode[] = [];

  setActivePlugins(plugins: AudioNode[]) {
    this.plugins = plugins;
  }
}