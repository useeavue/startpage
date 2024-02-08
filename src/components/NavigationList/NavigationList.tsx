import React from 'react';

import { Date } from '../Date/Date';

import styles from './NavigationList.module.scss';

export const NavigationList: React.FC = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.title}>
				<h1>Welcome back!</h1>
				<Date />
			</div>
			<ul>
				<li>~/general </li>
				<li>
					<a href='https://gmail.com/'>Gmail</a>
				</li>
				<li>
					<a href='https://facebook.com/messages/t'>Messenger</a>
				</li>
				<li>
					<a href='https://youtube.com'>YouTube</a>
				</li>
				<li>
					<a href='https://twitch.tv'>Twitch</a>
				</li>
				<li>
					<a href='https://monkeytype.com/'>MonkeyType</a>
				</li>
			</ul>
			<ul>
				<li>~/dev </li>
				<li>
					<a href='https://aur.archlinux.org/'>AUR</a>
				</li>
				<li>
					<a href='https://github.com/f1rq'>GitHub</a>
				</li>
				<li>
					<a href='https://github.com/f1rq/dotfiles'>Dots</a>
				</li>
				<li>
					<a href='https://svelte.dev/'>Svelte</a>
				</li>
				<li>
					<a href='https://tailwindcss.com/docs/installation'>Tailwind</a>
				</li>
			</ul>
			<ul>
				<li>~/school 拾</li>
				<li>
					<a href='https://notion.so'>Notion</a>
				</li>
				<li>
					<a href='https://www.office.com/?auth=2'>Office</a>
				</li>
				<li>
					<a href='https://ckziu-kursy.pl/my/'>Moodle</a>
				</li>
				<li>
					<a href='https://uonetplus.vulcan.net.pl/powiatstrzelecki'>
						Vulcan
					</a>
				</li>
				<li>
					<a href='https://www.w3schools.com'>W3Schools</a>
				</li>
			</ul>
			<ul>
				<li>~/reddit </li>
				<li>
					<a href='https://reddit.com/'>reddit.com</a>
				</li>
				<li>
					<a href='https://reddit.com/r/unixporn/'>r/unixporn</a>
				</li>
				<li>
					<a href='https://reddit.com/r/archlinux/'>r/archlinux</a>
				</li>
				<li>
					<a href='https://reddit.com/r/startpages/'>r/startpages</a>
				</li>
				<li>
					<a href='https://reddit.com/r/linux_gaming/'>r/linux_gaming</a>
				</li>
			</ul>
		</nav>
	);
};
