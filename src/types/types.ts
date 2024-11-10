export type TElementData = {
    tag: string;
    textContent: string;
};

export type TItem = {
    id: number;
    titleWrapper: {
        img: string;
        title: TElementData;
        subTitle: string;
        subTitleAlt: string;
    };
    banner: {
        title: TElementData;
        subTitle: string;
        subTitleAlt: string;
        button: string;
    };
    isSubBanner: boolean;
    subBanner?: {
        title: string;
    };
    ul: string[];
    isTimer: boolean;
};
