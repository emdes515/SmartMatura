import { createSessionClient } from '$lib/server/appwrite.js';
import { SESSION_COOKIE } from '$lib/server/appwrite.js';
import { redirect } from '@sveltejs/kit';

export const logout = async (event) => {
	const { account } = createSessionClient(event);

	await account.deleteSession('current');
	event.cookies.delete(SESSION_COOKIE, { path: '/' });

	redirect(302, '/login');
};
