import { redirect } from '@sveltejs/kit';
import { logout } from '$lib/actions/logout';

export async function load({ locals }) {
	if (!locals.user) redirect(302, '/login');

	return {
		props: {
			data: locals.user
		}
	};
}

export const actions = {
	logout
};
