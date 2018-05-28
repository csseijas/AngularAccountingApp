import {FigureKeys} from './figureKeys.interface';
import {DonutKeys} from './donutKeys.interface';

export interface DonutChartObject {
  'type': number;
  'title': string;
  'totalAmount'?: number;
  'figureKeys': Array<FigureKeys>;
  'donutKeys': Array<DonutKeys>;
}
