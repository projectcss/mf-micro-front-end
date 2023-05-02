
export interface IModel {
    name: string;

    clickHandler(): void;
}

export const modelPluginSymbol = Symbol('model');
