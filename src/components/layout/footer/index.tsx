import { Icon } from "../../ui";
import { useI18n } from "../../../i18n";
import logo from "../../../assets/icons/logo.svg";

export default function Footer() {
  const t = useI18n("global.footer.menu");

  return (
    <footer class="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 p-1 text-white md:p-1.5">
      <hr />
      <div class="my-1 mb-1 flex flex-col items-center sm:flex-row sm:justify-between">
        <a class="flex h-1.75" href="/"><img src={logo} alt="" /> FutureSphere</a>
        <nav aria-label="Menu" class="flex gap-1">
          <a class="hover:text-dark" href="/about">{t("about")}</a>
          <a class="hover:text-dark" href="/careers">{t("careers")}</a>
          <a class="hover:text-dark" href="/blogs">{t("blogs")}</a>
          <a class="hover:text-dark" href="/pricing">{t("pricing")}</a>
          <a class="hover:text-dark" href="/contact">{t("contact Us")}</a>
        </nav>
      </div>
      <hr />
      <div class="mt-1 flex justify-center sm:items-center sm:justify-between">
        <small class="text-sm text-white font-light">
          © 2024 FutureSphere. All rights reserved.
        </small>
        <nav aria-label="Social Media" class="hidden gap-1 sm:flex">
          <Icon
            class="hover:bg-dark inline-block cursor-pointer rounded-full p-0.5"
            color="fill-white"
            lib="bootstrap"
            name="BsTwitter"
          />
          <Icon
            class="hover:bg-dark inline-block cursor-pointer rounded-full p-0.5"
            color="fill-white"
            lib="bootstrap"
            name="BsFacebook"
          />
          <Icon
            class="hover:bg-dark inline-block cursor-pointer rounded-full p-0.5"
            color="fill-white"
            lib="bootstrap"
            name="BsLinkedin"
          />
        </nav>
      </div>
    </footer>
  );
}