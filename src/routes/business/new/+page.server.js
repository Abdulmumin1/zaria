import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const businessCategories = [
    'Retail',
    'Food & Beverage',
    'Services',
    'Education',
    'Healthcare',
    'Technology',
    'Manufacturing',
    'Agriculture',
    'Others'
  ];

const formSchema = z.object({
    name: z.string().min(2, 'Business name must be at least 2 characters'),
    category: z.enum(businessCategories, {
      required_error: 'Please select a business category'
    }),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    address: z.string().min(5, 'Address must be at least 5 characters'),
    phone: z.string().min(11, 'Phone number must be at least 11 characters'),
    email: z.string().email('Invalid email address'),
    website: z.string().url().optional().or(z.literal('')),
    images: z.any().optional() // Simplified file handling
  });


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
        const record = await pb.collection('business_request').create(body);

        
    }
};