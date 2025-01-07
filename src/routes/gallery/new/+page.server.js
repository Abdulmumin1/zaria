/** @type {import('./$types').Actions} */
export const actions = {
    new: async ({locals:{pb}, request})=>{
        // const form = await superValidate(request, zod(schema));
        
		// if (!form.valid) return fail(400, { form });
        let formData = await request.formData()
        let body = Object.fromEntries(formData)
		// console.log(body);

        delete body['images[]']
        body['images'] = formData.getAll('images[]')

        // console.log(body)
        const record = await pb.collection('gallery_review').create(body);

        
    }
};