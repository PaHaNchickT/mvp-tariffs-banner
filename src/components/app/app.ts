export default class App {
    // baseLayout() {
    //     const headerElement = new ElementCreator({
    //         parent: document.body,
    //         tag: TAGS.header,
    //     });
    //     headerElement.createChildElement({
    //         parent: headerElement.getElement(),
    //         tag: TAGS.h2,
    //         textContent: TEXTCONTENT.headerTitle,
    //     });

    //     const mainElement = new ElementCreator({
    //         parent: document.body,
    //         tag: TAGS.main,
    //     });
    //     this.mainSection = mainElement;

    //     const footerElement = new ElementCreator({
    //         parent: document.body,
    //         tag: TAGS.footer,
    //     });

    //     CLASSNAMES.footer.forEach((className, index) => {
    //         if (index === CLASSNAMES.footer.length - 1) {
    //             const element = new ElementCreator({
    //                 parent: footerElement.getElement(),
    //                 tag: TAGS.a,
    //                 className,
    //                 textContent: TEXTCONTENT.footer[index],
    //             });
    //             element.getElement()!.setAttribute('href', 'https://ternopavel.ru/');
    //             element.getElement()!.setAttribute('target', '_blank');
    //         } else {
    //             footerElement.createChildElement({
    //                 parent: footerElement.getElement(),
    //                 tag: TAGS.p,
    //                 className,
    //                 textContent: TEXTCONTENT.footer[index],
    //             });
    //         }
    //     });
    // }

    run() {
        document.body.append(document.createTextNode('Test'));
    }
}
