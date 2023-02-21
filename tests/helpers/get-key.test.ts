import { getKey } from '../../src/helpers/get-key';
describe('get-key test', () => {
    test('/email/inbox should be return email path=inbox ', () => {
        const path = getKey("/email/inbox");
        expect(path).toEqual('inbox');
    });
    test('/email should be return email path=inbox ', () => {
        const path = getKey("/email");
        expect(path).toEqual('inbox');
    });
    test('/email/ should be return email path=inbox ', () => {
        const path = getKey("/email/");
        expect(path).toEqual('inbox');
    });
});