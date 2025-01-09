/** @type {import('./$types').Actions} */
export const actions = {
    new: async ({locals:{pb}, request})=>{
        // const form = await superValidate(request, zod(schema));
        const records = await pb.collection('gallery').getFullList({
            sort: '-created',
        });
        

        // console.log(body)
        return {images: records}
        
    }
};

/** @type {import('./$types').PageLoad} */
export async function load({locals:{pb}}) {
    // const form = await superValidate(request, zod(schema));
    const records = await pb.collection('gallery').getFullList({
        sort: '-created',
    });
    

    // console.log(body)
    return {images: records}
}