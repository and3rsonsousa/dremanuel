import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{
			title: "Dr. Emanuel Carneiro - Oftalmologista Clínico e Cirúrgico - Médico dos Olhos",
		},
		{
			name: "description",
			content: "",
		},
	];
};

export default function Index() {
	return (
		<>
			{/* <pre>
				{encodeURI(
					"https://wa.me/5588997925279?text=Olá, Gostaria de agendar uma CONSULTA OFTALMOLÓGICA com o Dr. Emanuel no Ipu."
				)}
			</pre> */}
			<div className="min-h-dvh bg-black grid place-content-center text-white">
				<div className="max-w-96 p-2 rounded-xl text-center">
					<div className="rounded-full overflow-hidden mx-auto w-40">
						<img
							src="./dremanuel.jpg"
							alt="Dr. Emanuel Carneiro - Oftalmologista Clínico e Cirúrgico - Médico dos Olhos"
						/>
					</div>
					<div className="text-center  text-3xl font-bold tracking-tighter mt-4">
						Dr. Emanuel Carneiro
					</div>
					<div className="uppercase tracking-widest font-bold text-xs">
						Oftalmologia Clínica e Cirúrgica
					</div>
					<div className="mt-8 mb-2 text-zinc-400 font-semibold">
						Agendar consulta em:
					</div>
					<div className="flex mb-8 flex-col gap-2">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://wa.me/5588997925279?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20CONSULTA%20OFTALMOL%C3%93GICA%20com%20o%20Dr.%20Emanuel%20em%20Sobral."
							className="link"
						>
							Sobral
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://wa.me/5588997925279?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20CONSULTA%20OFTALMOL%C3%93GICA%20com%20o%20Dr.%20Emanuel%20em%20Massap%C3%AA."
							className="link"
						>
							Massapê
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://wa.me/5588997925279?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20CONSULTA%20OFTALMOL%C3%93GICA%20com%20o%20Dr.%20Emanuel%20em%20Jijoca."
							className="link"
						>
							Jijoca
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://wa.me/5588997925279?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20CONSULTA%20OFTALMOL%C3%93GICA%20com%20o%20Dr.%20Emanuel%20no%20Ipu."
							className="link"
						>
							Ipu
						</a>
					</div>

					<div className="text-sm  tracking-tight">
						© {new Date().getFullYear()} - Dr. Emanuel Carneiro
					</div>
				</div>
			</div>
		</>
	);
}
