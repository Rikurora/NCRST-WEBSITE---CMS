<?php

namespace App\Entity;

use App\Repository\BoardCommissionerRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BoardCommissionerRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['board-commissioner:read']],
    denormalizationContext: ['groups' => ['board-commissioner:write']]
)]
class BoardCommissioner
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['board-commissioner:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['board-commissioner:read', 'board-commissioner:write'])]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['board-commissioner:read', 'board-commissioner:write'])]
    private ?string $position = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['board-commissioner:read', 'board-commissioner:write'])]
    private ?string $bio = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['board-commissioner:read', 'board-commissioner:write'])]
    private ?string $image = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['board-commissioner:read', 'board-commissioner:write'])]
    private ?string $institution = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['board-commissioner:read', 'board-commissioner:write'])]
    private ?\DateTimeInterface $appointmentDate = null;

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

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(?string $position): self
    {
        $this->position = $position;
        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        $this->bio = $bio;
        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;
        return $this;
    }

    public function getInstitution(): ?string
    {
        return $this->institution;
    }

    public function setInstitution(?string $institution): self
    {
        $this->institution = $institution;
        return $this;
    }

    public function getAppointmentDate(): ?\DateTimeInterface
    {
        return $this->appointmentDate;
    }

    public function setAppointmentDate(?\DateTimeInterface $appointmentDate): self
    {
        $this->appointmentDate = $appointmentDate;
        return $this;
    }
} 