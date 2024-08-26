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
							href={encodeURI(
								"https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM SOBRAL com o Dr. Emanuel."
							)}
							className="link"
						>
							Sobral
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href={encodeURI(
								"https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM MASSAPÊ com o Dr. Emanuel."
							)}
							className="link"
						>
							Massapê
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href={encodeURI(
								"https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM JIJOCA com o Dr. Emanuel."
							)}
							className="link"
						>
							Jijoca
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href={encodeURI(
								"https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM IPU com o Dr. Emanuel."
							)}
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
