
export const parseQrCode = (code: string): {
    businessId: string | null
} => {
    let id = null;
    if (typeof code == 'string' && code.length > 0) {
        let fragments = code.split('/');
        id = fragments.pop();
    }
    return {
        businessId: id && id.length == 8 ? id : null
    }
}