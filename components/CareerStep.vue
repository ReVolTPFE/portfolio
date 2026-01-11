<script setup lang="ts">
const props = defineProps<{
    slug: string
    school?: {
        period: string
        diplome: string
        name: string
        address: string
        logo: string
        link: string
    }
    company?: {
        period: string
        jobTitle: string
        name: string
        address: string
        logo: string
        link: string
        details?: {
            status?: string
        }
    }
}>();

const isSchool = !!props.school;
const isCompany = !!props.company;
const data = isSchool ? props.school : props.company;
</script>

<template>
	<NuxtLink :to="`/career/${props.slug}`" class="block my-4 mx-8 sm:mx-0 relative z-10 group">
		<div class="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary border-2 border-transparent cursor-pointer">
			<div class="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center mb-2">
				<div class="flex items-center gap-3 sm:w-5/6">
					<img 
						v-if="data?.logo" 
						:src="data.logo" 
						:alt="data.name" 
						class="w-10 h-10 object-cover" 
					>
					<h3 class="font-semibold text-primary text-lg sm:text-xl">
						{{ data?.name }}
					</h3>
				</div>
				<span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full my-2 sm:my-0">
					{{ data?.period }}
				</span>
			</div>
            
			<div class="mx-2">
				<template v-if="isSchool && school">
					<p class="text-md sm:text-lg text-tertiary font-bold">{{ school.diplome }}</p>
					<p class="text-sm sm:text-md text-gray-600">{{ school.address }}</p>
				</template>
                
				<template v-else-if="isCompany && company">
					<p class="text-md sm:text-lg text-tertiary font-bold">{{ company.jobTitle }}</p>
					<p class="text-sm sm:text-md text-gray-600">{{ company.details?.status }} • {{ company.address }}</p>
				</template>
			</div>
		</div>
	</NuxtLink>
</template>
