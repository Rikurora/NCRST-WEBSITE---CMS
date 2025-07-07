<?php

namespace App\Entity;

use App\Repository\EcosystemPartnerRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: EcosystemPartnerRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['ecosystem-partner:read']],
    denormalizationContext: ['groups' => ['ecosystem-partner:write']]
)]
class EcosystemPartner
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['ecosystem-partner:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['ecosystem-partner:read', 'ecosystem-partner:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['ecosystem-partner:read', 'ecosystem-partner:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['ecosystem-partner:read', 'ecosystem-partner:write'])]
    private ?string $logo = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['ecosystem-partner:read', 'ecosystem-partner:write'])]
    private ?string $website = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(['ecosystem-partner:read', 'ecosystem-partner:write'])]
    private ?string $type = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(['ecosystem-partner:read', 'ecosystem-partner:write'])]
    private ?string $status = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
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

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(?string $logo): self
    {
        $this->logo = $logo;
        return $this;
    }

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(?string $website): self
    {
        $this->website = $website;
        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;
        return $this;
    }
} 