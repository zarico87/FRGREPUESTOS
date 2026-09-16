import { useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiFacebook, FiInstagram, FiLoader, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import Seo from "../components/Seo";
import styles from "./Contact.module.css";

const initialForm = { nombre: "", email: "", consulta: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [state, handleFormspreeSubmit] = useForm("xyezgwpb");

  const validate = () => {
    const next = {};
    if (!form.nombre.trim()) next.nombre = "Ingresá tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Ingresá un mail válido.";
    if (form.consulta.trim().length < 10) next.consulta = "Contanos un poco más (mínimo 10 caracteres).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    await handleFormspreeSubmit(event);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    window.location.reload();
  };

  return (
    <>
      <Seo title="Contacto" description="Contactá a FRGREPUESTOS en Mariano Fragueiro 653, B° Ducasse, Córdoba Capital. WhatsApp, Instagram, Facebook y formulario de consultas." path="/contacto" />
      <section className="container-frg py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-[.2em] text-[var(--frg-red)]">Contacto</span>
          <h1 className="mt-3 text-4xl font-black tracking-tight">Hablemos de tu vehículo</h1>
          <p className="mt-4 leading-7 text-[var(--muted)]">Completá el formulario y recibí un beneficio especial para mano de obra.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <aside className={styles.infoCard}>
            <div>
              <span className={styles.kicker}>15% OFF</span>
              <h2>Tu consulta tiene premio</h2>
              <p>Al completar correctamente el formulario recibís un 15% OFF en mano de obra. El beneficio queda sujeto a las condiciones del servicio.</p>
            </div>

            <div className="space-y-4">
              <div className={styles.infoLine}><FiMapPin /><span><strong>Dirección</strong><br />Mariano Fragueiro 653 · B° Ducasse<br />Córdoba Capital</span></div>
              <a className={styles.infoLine} href="https://wa.me/5493517368376" target="_blank" rel="noreferrer"><FaWhatsapp /><span><strong>WhatsApp</strong><br />Escribinos directamente</span></a>
              <a className={styles.infoLine} href="https://www.instagram.com/frgrepuestos/" target="_blank" rel="noreferrer"><FiInstagram /><span><strong>Instagram</strong><br />@frgrepuestos</span></a>
              <a className={styles.infoLine} href="https://www.facebook.com/profile.php?id=61562034547817" target="_blank" rel="noreferrer"><FiFacebook /><span><strong>Facebook</strong><br />FRGREPUESTOS</span></a>
            </div>
          </aside>

          <div className={styles.form}>
            {state.succeeded ? (
              <div className={styles.successCard}>
                <div className={styles.successIconWrapper}>
                  <FiCheckCircle className={styles.successCardIcon} />
                </div>
                <h3>¡Consulta enviada con éxito!</h3>
                <p>
                  Gracias por comunicarte con <strong>FRGREPUESTOS</strong>. Ya recibimos tus datos y nos pondremos en contacto a la brevedad para asesorarte.
                </p>

                <div className={styles.promoReminder}>
                  <span className={styles.promoBadge}>⚡ BENEFICIO 15% OFF ACTIVADO</span>
                  <p>Tu descuento del 15% OFF en mano de obra quedó registrado para esta solicitud.</p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 rounded-[9px] border border-[var(--border)] bg-[var(--surface-2)] px-5 py-2.5 text-sm font-bold text-[var(--text)] transition hover:border-[var(--frg-red)] hover:text-[var(--frg-red)]"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} action="https://formspree.io/f/xyezgwpb" method="POST" noValidate>
                <div className={styles.formHeader}>
                  <span className={styles.formEyebrow}>
                    FRGREPUESTOS · ATENCIÓN PERSONALIZADA
                  </span>

                  <h2>Solicitá tu presupuesto</h2>

                  <p>
                    Dejanos los datos de tu vehículo y contanos qué necesitás.
                    Nuestro equipo te orientará con la mejor opción.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={styles.field}>
                    <span>Ingresá nombre</span>
                    <input
                      id="nombre"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      autoComplete="name"
                      required
                    />
                    {errors.nombre && <small>{errors.nombre}</small>}
                    <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
                  </label>

                  <label className={styles.field}>
                    <span>Mail</span>
                    <input
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      type="email"
                      autoComplete="email"
                      required
                    />
                    {errors.email && <small>{errors.email}</small>}
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </label>
                </div>

                <label className={`${styles.field} mt-5`}>
                  <span>Dejanos tu consulta</span>
                  <textarea
                    id="consulta"
                    name="consulta"
                    value={form.consulta}
                    onChange={handleChange}
                    placeholder="Contanos marca, modelo, año y qué necesitás..."
                    rows="7"
                    required
                  />
                  {errors.consulta && <small>{errors.consulta}</small>}
                  <ValidationError prefix="Consulta" field="consulta" errors={state.errors} />
                </label>

                {state.errors && state.errors.getFormErrors && state.errors.getFormErrors().length > 0 && (
                  <div className={styles.formErrorBox}>
                    <FiAlertCircle />
                    <span>Hubo un problema al enviar tu consulta. Por favor, verificá los datos o contactanos por WhatsApp.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="mt-6 inline-flex items-center gap-2 rounded-[9px] bg-[var(--frg-red)] px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <>
                      <FiLoader className="animate-spin" /> Enviando consulta...
                    </>
                  ) : (
                    <>
                      Enviar consulta <FiSend />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="container-frg pb-20">
        <div className="overflow-hidden rounded-[16px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
          <div className="flex items-center gap-3 border-b border-[var(--border)] px-5 py-4 font-black">
            <FiMapPin className="text-[var(--frg-red)]" /> Encontranos en Ducasse
          </div>
          <iframe
            title="Ubicación FRGREPUESTOS"
            src="https://www.google.com/maps?q=Mariano+Fragueiro+653,+Córdoba,+Argentina&output=embed"
            className="h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}