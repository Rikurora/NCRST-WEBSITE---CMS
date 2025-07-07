<?php

namespace App\Entity;

use App\Repository\EcosystemPartnerExampleRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: EcosystemPartnerExampleRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['ecosystem-partner-example:read']],
    denormalizationContext: ['groups' => ['ecosystem-partner-example:write']]
)]
class EcosystemPartnerExample
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['ecosystem-partner-example:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['ecosystem-partner-example:read', 'ecosystem-partner-example:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['ecosystem-partner-example:read', 'ecosystem-partner-example:write'])]
    private ?string $description = null;

    #[ORM\ManyToOne(targetEntity: EcosystemPartner::class)]
    #[Groups(['ecosystem-partner-example:read', 'ecosystem-partner-example:write'])]
    private ?EcosystemPartner $partner = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function getPartner(): ?EcosystemPartner
    {
        return $this->partner;
    }

    public function setPartner(?EcosystemPartner $partner): self
    {
        $this->partner = $partner;
        return $this;
    }
} 