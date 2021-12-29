<script lang="ts">
	export let title: string;
	export let d: string;
	export let color: string;
	export let bg: string;
	export let desc: string;
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="w-1/5 h-80 group hover:w-1/2 transition-all duration-700 delay-300">
	<article
		class="bg-white/30 hover:bg-white/60 overflow-hidden transition-colors duration-700 backdrop-blur-xl h-full flex flex-col gap-2 items-center border-2 border-white/20 rounded-md">
		<div
			class="overflow-hidden h-1/4 -translate-y-20 group-hover:translate-y-0 transition-transform delay-500">
			<h1 class="text-3xl font-prompt">
				{title}
			</h1>
		</div>
		<div class="h-1/4 text-white">
			<svg
				role="img"
				class={`h-20 w-20 group-hover:${color} rounded-full group-hover:${bg} transition-colors delay-500 p-2 fill-current`}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"><title>React</title><path {d} /></svg>
		</div>
		<div class="overflow-hidden flex items-center h-full px-4">
			<p
				class="text-xs text-justify translate-y-80 group-hover:translate-y-0 transition-transform ease-out delay-700">
				{desc}
			</p>
		</div>
	</article>
</div>
