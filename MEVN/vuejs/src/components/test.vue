<script>
// eslint-disable-next-line no-undef
defineProps({
    test: {
        type: String,
        required: true,
    },
});
</script>

<template>
   <form action="" method="post">
		<label for="username">Username:</label>
		<input type="text" id="username" name="username" required>

		<label for="password">Password:</label>
		<input type="password" id="password" name="password" required>

		<input type="submit" value="Login">
	</form>
</template>

<style>
		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 50px;
		}
		input[type="text"], input[type="password"] {
			padding: 10px;
			margin: 10px;
			border-radius: 5px;
			border: none;
			box-shadow: 2px 2px 5px grey;
			width: 300px;
		}
		input[type="submit"] {
			padding: 10px 20px;
			margin: 20px;
			border-radius: 5px;
			border: none;
			background-color: #4CAF50;
			color: white;
			font-size: 20px;
			cursor: pointer;
		}
	</style>