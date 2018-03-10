<template>
	<section>
		<header>
			<h1>岩瀬唯奈 OFFICIAL WEB SITE</h1>
		</header>
		<nav>
			<ul class="snip1189">
				<li><router-link to="/">HOME</router-link></li>
				<li><router-link to="/news">NEWS</router-link></li>
				<li><router-link to="/live">LIVE</router-link></li>
				<li><router-link to="/disc">DISCO</router-link></li>
				<li><router-link to="/prof">PROF</router-link></li>
				<li><router-link to="/movie">MOVIE</router-link></li>
				<li><router-link to="/goods">GOODS</router-link></li>
				<li><router-link to="/contact">CONTACT</router-link></li>
			</ul>	
		</nav>

		<div class="contacts">
			<h2 class="page-title">
				CONTACT
			</h2>
			<div class="contact">
			<div class="contactLeft">
				<form action="#" method="get">
					<input type="text" name="NAME" class="name" placeholder="NAME">
					<input type="email" name="E-MAIL" class="e-mail" placeholder="E-MAIL">
				</form>
			</div>
			<div class="contactRight">
				<form action="#" method="get">
					<textarea type="text" name="MESSAGE" cols="80" row="100" placeholder="MESSAGE"></textarea>
					<input type="submit" name="送信" class="submit">
				</form>
			</div>
			</div>
		</div>

	</section>
</template>