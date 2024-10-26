<script>
	import { navigate } from 'svelte-routing';

	export let data;

	let user = data.props.data;
</script>

<div class="m-5 flex h-16 w-screen flex-col justify-center">
	<h2 class="flex items-center text-2xl font-bold">
		<span class="mr-2">👋</span> Cześć, {user.name}
	</h2>
	<span>Zacznij swoje pżygotowania do matury już dziś</span>
</div>

<div class="w-full p-5">
	<div class="card w-full bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Słownictwo</h2>
			<p>Ucz się słowek do matury, kożystjąć z fiszek.</p>
			<div class="card-actions justify-end">
				<a href="/angWordsMenu" class="btn btn-primary">Przejdź</a>
			</div>
		</div>
	</div>
</div>

<form action="?/logout" method="post">
	<button class="btn btn-error">Wyloguj się</button>
</form>
