import { profile } from "../../data/profile";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";

const activityPhoto = new URL("../../../assets/profile/profile-2-a.jpeg", import.meta.url).href;

const profileFacts = [
  { label: "Nama", value: profile.name, icon: "person" as const },
  { label: "NIM", value: profile.nim, icon: "tag" as const },
  { label: "Program", value: profile.program, icon: "graduation" as const },
  { label: "Mata Kuliah", value: profile.course, icon: "book" as const },
  { label: "Tahun", value: String(profile.year), icon: "calendar" as const },
  { label: "Bidang", value: profile.field, icon: "runner" as const },
  { label: "Status", value: profile.status ?? "[Status akan ditambahkan]", icon: "person" as const },
];

export function ProfileSection() {
  const nameParts = profile.name.trim().split(/\s+/);
  const givenName = nameParts.slice(0, -1).join(" ");
  const familyName = nameParts.at(-1) ?? profile.name;

  return (
    <section id="profil" className="home-section profile-section" aria-labelledby="profile-title">
      <SectionHeading eyebrow="02 / Di balik portofolio" title="Belajar untuk menjadi pendidik." titleId="profile-title" aside="Menghubungkan cara berpikir dengan pengalaman nyata dalam pendidikan jasmani." />
      <div className="profile-grid">
        <div className="profile-photo-placeholder">
          {profile.photo ? (
            <>
              <img src={activityPhoto} alt={`Dokumentasi kegiatan pembelajaran ${profile.name}`} loading="lazy" />
              <span className="profile-signature">Ruang belajar, ruang bertumbuh.</span>
            </>
          ) : (
            <>
              <span className="placeholder-kicker">Foto profil</span>
              <strong>[Foto akan ditambahkan]</strong>
              <small>Foto asli pemilik portofolio.</small>
            </>
          )}
        </div>
        <div className="profile-details">
          <h3>
            <span>{givenName}</span> <strong>{familyName}</strong>
          </h3>
          <p className="profile-role">{profile.status ?? "Mahasiswa PPG"} <span aria-hidden="true">·</span> {profile.field}</p>
          <p className="profile-description">{profile.description}</p>
          <dl className="profile-facts">
            {profileFacts.map((fact) => (
              <div key={fact.label}>
                <span className="fact-icon"><Icon name={fact.icon} size={19} /></span>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
