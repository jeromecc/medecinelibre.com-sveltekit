<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap';

	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<header>
	<Navbar expand="md">
		<NavbarBrand href="/">Médecine Libre</NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
			<Nav class="ms-auto" navbar>
				<NavItem>
					<NavLink href="/contact">Contact</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://github.com/jeromecc"><i class="bi bi-github" /></NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://twitter.com/MedecineLibre">
						<i class="bi bi-twitter" /></NavLink
					>
				</NavItem>
				<NavItem>
					<NavLink href="https://www.linkedin.com/in/j%C3%A9r%C3%B4me-pinguet-177454b0/"
						><i class="bi bi-linkedin" /></NavLink
					>
				</NavItem>
				<!--Dropdown nav inNavbar>
					<DropdownToggle nav caret>Options</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem>Option 1</DropdownItem>
						<DropdownItem>Option 2</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Reset</DropdownItem>
					</DropdownMenu>
				</Dropdown-->
			</Nav>
		</Collapse>
	</Navbar>
</header>

<style>
</style>
