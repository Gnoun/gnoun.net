export default function remarkTranslatedLinks() {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    return (tree) => {
        const definition = definitions(tree);
        visit(tree, (node) => {
            if (node.type === 'link' || node.type === 'linkReference') {
                const ctx = node.type === 'link' ? node : definition(node.identifier)
                console.log('aaa: ' + node.type);
            }
        })
    }
}