import { TItem } from '../types/types';
import GENERAL_IMG_PATH from './const-img-path';

const MAIN_CONTENT: TItem[] = [
    {
        id: 0,
        titleWrapper: {
            img: GENERAL_IMG_PATH.promoIcons[0],
            title: {
                tag: 'h4',
                textContent: 'Консультация',
            },
            subTitle: 'Основные вопросы и направления',
            subTitleAlt: 'Основные вопросы и направления',
        },
        banner: {
            title: {
                tag: 'h3',
                textContent: 'Бесплатно',
            },
            subTitle: 'В любое время',
            subTitleAlt: 'Единоразовый платеж',
            button: 'Выбрать',
            buttonRole: 'selectTariff',
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
            img: GENERAL_IMG_PATH.promoIcons[1],
            title: {
                tag: 'h4',
                textContent: 'Базовый тариф',
            },
            subTitle: 'От любого банка без процентов и переплат',
            subTitleAlt: 'Основные вопросы и направления',
        },
        banner: {
            title: {
                tag: 'h3',
                textContent: '65 000 ₽',
            },
            subTitle: 'Единоразовый платеж',
            subTitleAlt: 'Единоразовый платеж',
            button: 'Выбрать',
            buttonRole: 'selectTariff',
        },
        isSubBanner: true,
        subBanner: {
            title: 'ГАРАНТИЯ СПИСАНИЯ',
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
            img: GENERAL_IMG_PATH.promoIcons[2],
            title: {
                tag: 'h4',
                textContent: 'Рассрочка',
            },
            subTitle: 'От любого банка без процентов и переплат',
            subTitleAlt: 'Основные вопросы и направления',
        },
        banner: {
            title: {
                tag: 'h3',
                textContent: '3880 ₽ / мес.',
            },
            subTitle: 'На 24 месяца',
            subTitleAlt: 'Единоразовый платеж',
            button: 'Выбрать',
            buttonRole: 'selectTariff',
        },
        isSubBanner: true,
        subBanner: {
            title: 'ГАРАНТИЯ СПИСАНИЯ',
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
