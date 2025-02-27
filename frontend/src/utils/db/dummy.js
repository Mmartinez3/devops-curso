export const POSTS = [
	{
		_id: "1",
		text: "Se viene nerdearla",
		img: "/posts/post4.jpeg",
		user: {
			username: "roxsross",
			profileImg: "/avatars/roxsross.jpg",
			fullName: "RoxsRoss",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "roxsross",
					profileImg: "/avatars/girl1.png",
					fullName: "Jane Doe",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	}
];

export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "RoxsRoss",
		username: "roxsross",
		profileImg: "/avatars/roxsross.jpg",
	},
	{
		_id: "2",
		fullName: "Jane Doe",
		username: "janedoe",
		profileImg: "/avatars/girl1.png",
	},
	{
		_id: "3",
		fullName: "Bob Doe",
		username: "bobdoe",
		profileImg: "/avatars/boy3.png",
	},
	{
		_id: "4",
		fullName: "Daisy Doe",
		username: "daisydoe",
		profileImg: "/avatars/girl2.png",
	},
];