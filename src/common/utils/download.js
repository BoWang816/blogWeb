import { getToken } from '@utils';

import { apiPrefix } from '../../../server-config';

export default function download(router) {
	const $a = document.createElement('a');
	const token = getToken();
	$a.href = token ? `${apiPrefix}${router}?token=${token}` : `${apiPrefix}${router}`;
	document.body.appendChild($a);
	$a.click();
	document.body.removeChild($a);
}
