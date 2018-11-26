export default (...args) => {
    const template = { infos: { info: [] } };
    args.forEach((arg) => {
        const [id, value] = arg;
        template.infos.info.push({ id, value, type: 'Error' });
    });
    return template;
};
