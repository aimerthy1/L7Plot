import { Source } from '@antv/l7';
import { getLayerStyleAttribute } from '../../../helper/layer';
import { HeatmapLayer } from '../../../../src/layers/heatmap-layer';

describe('heatmap layer', () => {
  const layer = new HeatmapLayer({
    source: new Source([], { parser: { type: 'json', x: 'x', y: 'y' } }),
    shape: 'heatmap',
    size: {
      field: 'mag',
      value: [0, 1],
    },
    style: {
      intensity: 3,
      radius: 20,
      opacity: 1,
      colorsRamp: [
        { color: 'rgba(33,102,172,0.0)', position: 0 },
        { color: 'rgb(103,169,207)', position: 0.2 },
        { color: 'rgb(209,229,240)', position: 0.4 },
        { color: 'rgb(253,219,199)', position: 0.6 },
        { color: 'rgb(239,138,98)', position: 0.8 },
        { color: 'rgb(178,24,43,1.0)', position: 1 },
      ],
    },
  });

  it('type', () => {
    expect(layer.type).toBe('heatmapLayer');
    expect(layer.layer.type).toBe('HeatMapLayer');
  });

  it('size', () => {
    expect(getLayerStyleAttribute(layer.layer['pendingStyleAttributes'], 'size')).toEqual({
      attributeName: 'size',
      attributeField: 'mag',
      attributeValues: [0, 1],
    });
  });

  it('shape', () => {
    expect(getLayerStyleAttribute(layer.layer['pendingStyleAttributes'], 'shape')).toEqual({
      attributeName: 'shape',
      attributeField: 'heatmap',
    });
  });

  it('style', () => {
    expect(layer.layer['rawConfig']).toMatchObject({
      intensity: 3,
      radius: 20,
      opacity: 1,
      colorsRamp: [
        { color: 'rgba(33,102,172,0.0)', position: 0 },
        { color: 'rgb(103,169,207)', position: 0.2 },
        { color: 'rgb(209,229,240)', position: 0.4 },
        { color: 'rgb(253,219,199)', position: 0.6 },
        { color: 'rgb(239,138,98)', position: 0.8 },
        { color: 'rgb(178,24,43,1.0)', position: 1 },
      ],
    });
  });
});
