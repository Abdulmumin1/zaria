import { mockBusinesses } from '$lib';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const id = params.slug;
	const business = mockBusinesses.find((b) => b.id === Number(id));
    if (!business){
        return error(404, {message:"Not"})
    }
	return { business };
}
