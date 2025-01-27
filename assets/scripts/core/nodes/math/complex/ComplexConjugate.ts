import { AccessTypes } from '../../../data/AccessTypes';
import DataAccess from '../../../data/DataAccess';
import { DataTypes } from '../../../data/DataTypes';
import InputManager from '../../../io/InputManager';
import OutputManager from '../../../io/OutputManager';
import NComplexNumber from '../../../math/primitive/NComplexNumber';
import NodeBase from '../../NodeBase';

export default class ComplexConjugate extends NodeBase {
  get displayName (): string {
    return 'CConj';
  }

  public registerInputs (manager: InputManager): void {
    manager.add('c', 'Complex number', DataTypes.COMPLEX, AccessTypes.ITEM);
  }

  public registerOutputs (manager: OutputManager): void {
    manager.add('r', 'Conjugate of Complex number', DataTypes.NUMBER, AccessTypes.ITEM);
  }

  public solve (access: DataAccess): void {
    const c = access.getData(0) as NComplexNumber;
    access.setData(0, c.conj());
  }
}
