import { TItem } from '../types/types';

const MAIN_CONTENT: TItem[] = [
    {
        id: 0,
        titleWrapper: {
            img: 'https://raw.githubusercontent.com/PaHaNchickT/mvp-tariffs-banner/refs/heads/develop/src/public/icons/titleWrapperIcon-01.svg',
            title: {
                tag: 'h4',
                textContent: 'Консультация',
            },
            subTitle: 'Основные вопросы и направления',
        },
        banner: {
            title: {
                tag: 'h3',
                textContent: 'Бесплатно',
            },
            subTitle: 'В любое время',
            button: 'Выбрать',
        },
        isSubBanner: false,
        ul: [
            'В любое удобное время',
            'Расскажем о всех нюансах процедуры',
            'Предложим варианты решения вашей проблемы',
            'Подготовим рекомендаци',
        ],
        isTimer: false,
    },
    {
        id: 1,
        titleWrapper: {
            img: 'https://raw.githubusercontent.com/PaHaNchickT/mvp-tariffs-banner/refs/heads/develop/src/public/icons/titleWrapperIcon-02.svg',
            title: {
                tag: 'h4',
                textContent: 'Базовый тариф',
            },
            subTitle: 'От любого банка без процентов и переплат',
        },
        banner: {
            title: {
                tag: 'h3',
                textContent: '65 000 ₽',
            },
            subTitle: 'Единоразовый платеж',
            button: 'Выбрать',
        },
        isSubBanner: true,
        subBanner: {
            title: 'Гарантия списания',
        },
        ul: [
            'Сбор всех необходимых документов',
            'Сбор всех необходимых документов',
            'Взаимодействие с финансовым управляющим',
            'Контроль процедуры реализац. имущества',
            'Поддержка и сопровождение клиента на всех этапах банкротства',
        ],
        isTimer: false,
    },
    {
        id: 2,
        titleWrapper: {
            img: 'https://raw.githubusercontent.com/PaHaNchickT/mvp-tariffs-banner/refs/heads/develop/src/public/icons/titleWrapperIcon-03.svg',
            title: {
                tag: 'h4',
                textContent: 'Рассрочка',
            },
            subTitle: 'От любого банка без процентов и переплат',
        },
        banner: {
            title: {
                tag: 'h3',
                textContent: '3880 ₽ / мес.',
            },
            subTitle: 'На 24 месяца',
            button: 'Выбрать',
        },
        isSubBanner: true,
        subBanner: {
            title: 'Гарантия списания',
        },
        ul: [
            'Удобные варианты рассрочки',
            'Комфортные условия оплаты',
            'Фиксированная сумма',
            'Гарантия возврата средств',
            'Остальное, что и в базовом тарифе',
        ],
        isTimer: true,
    },
];

export default MAIN_CONTENT;
