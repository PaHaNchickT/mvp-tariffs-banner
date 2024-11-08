export type TElementData = {
    tag: string;
    textContent: string;
};

export type TItem = {
    id: number;
    titleWrapper: {
        title: TElementData;
        subTitle: string;
    };
    banner: {
        title: TElementData;
        subTitle: string;
        button: string;
    };
    isSubBanner: boolean;
    subBanner?: {
        title: string;
    };
    ul: string[];
    isTimer: boolean;
};
