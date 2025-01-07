import PocketBase from 'pocketbase';



/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.pb = new PocketBase('https://zaria.pockethost.io');
	const response = await resolve(event);
	return response;
}