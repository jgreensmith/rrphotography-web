import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class WLimages {
  readonly id: string;
  readonly imageName?: string;
  readonly cName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WLimages>);
  static copyOf(source: WLimages, mutator: (draft: MutableModel<WLimages>) => MutableModel<WLimages> | void): WLimages;
}

export declare class Cimages {
  readonly id: string;
  readonly imageName?: string;
  readonly cName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cimages>);
  static copyOf(source: Cimages, mutator: (draft: MutableModel<Cimages>) => MutableModel<Cimages> | void): Cimages;
}

export declare class LSimages {
  readonly id: string;
  readonly imageName?: string;
  readonly cName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LSimages>);
  static copyOf(source: LSimages, mutator: (draft: MutableModel<LSimages>) => MutableModel<LSimages> | void): LSimages;
}

export declare class BWimages {
  readonly id: string;
  readonly imageName?: string;
  readonly cName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BWimages>);
  static copyOf(source: BWimages, mutator: (draft: MutableModel<BWimages>) => MutableModel<BWimages> | void): BWimages;
}