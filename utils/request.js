
//封装请求对象
const BASE_URL = "http://localhost:15009";
/**
 * 
 * @param {*} param0 {url, data, method}
 */
function request({ url, data, method }) {
	return new Promise((resolve, reject) => {
		//uni.request 发起网络请求
		uni.request({
			url: BASE_URL + url,
			data: {},
			header: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest'
			},
			method,
			success: ({ data, statusCode, header }) => {
				if (data.code == 1) {
					//请求成功
					resolve(data);
				} else {
					//给用户一个提示
					uni.showToast({
						title: data.message,
						icon: 'none',
						mask: true,
						duration: 3000
					});
					reject(data.message);
				}
			},
			fail: (error) => {
				reject(error);
			}
		});
	});
}

export default request;