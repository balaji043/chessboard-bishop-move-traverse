export const Home = () => {
	return (
		<div className='max-w-6xl mx-auto py-8 prose-xl overflow-y-auto'>
			<p>Hello Everyone</p>
			<h3>About</h3>
			<p>
				This project is build as an attempt to make it easier to visually
				understand the concepts of competitive programming questions
			</p>
			<h3>Why?</h3>
			<p>
				I recently started to attend interviews to switch from the current
				company. In one of the interviews, the interviewer asked me to solve a
				program. I know I can solve the problem. But I struggled a lot to
				visulize the solution/concept. So it resulted in me taking a lot of time
				to solve the problem which needless to say not a good thing in an
				interview.
			</p>

			<p>
				Halfway through the solving I realized I'm having hard time imagining
				this grid and translate the logic to code. So I decided to spin a quick
				project which will have the 8x8 grid with color coded cells to help me
				with the process. Then I quickly solved solved the problem.
			</p>
			<p>
				That is the story so I decided maybe I will try to create some sort ui
				for the suitable programming questions I solve. So I hosted this site as
				a collection of those UI.
			</p>
			<p>
				I'm trying to formulate the UI so people can try and run their own
				solution by integrating playground and stuff. let's see.
			</p>
			<h3>Problem Statement </h3>
			<p>
				When given <strong>start</strong> and <strong>end</strong> coordinates
				of a 8x8 grid(<strong>Chessboard</strong>), we need to print whether it
				is possible to get from start to end only using
				<strong> Bishop's moves</strong>
			</p>
		</div>
	);
};
