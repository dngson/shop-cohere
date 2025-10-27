import dotenv from 'dotenv';
dotenv.config();

function joinUrl(base, path) {
    if (base.endsWith('/')) base = base.slice(0, -1);
    if (!path.startsWith('/')) path = '/' + path;
    return base + path;
}

export default {
    vnp_TmnCode: process.env.VNP_TMNCODE,
    vnp_HashSecret: process.env.VNP_HASHSECRET,
    vnp_Url: process.env.VNP_URL,
    //vnp_ReturnUrl: process.env.FRONTEND_URL + 'order/vnpay-result',
    vnp_ReturnUrl: joinUrl(process.env.FRONTEND_URL, '/order/vnpay-result'),
};