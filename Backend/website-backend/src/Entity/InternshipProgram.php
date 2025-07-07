<?php

namespace App\Entity;

use App\Repository\InternshipProgramRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: InternshipProgramRepository::class)]
class InternshipProgram
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $department = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank]
    private ?string $requirements = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $duration = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $stipend = null;

    #[ORM\Column(length: 50)]
    #[Assert\Choice(choices: ['open', 'closed', 'filled'])]
    private ?string $status = 'open';

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Assert\NotBlank]
    private ?\DateTimeInterface $startDate = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Assert\NotBlank]
    private ?\DateTimeInterface $endDate = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Assert\NotBlank]
    private ?\DateTimeInterface $applicationDeadline = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank]
    private ?string $benefits = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    private ?string $mentorName = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Email]
    private ?string $mentorEmail = null;

    #[ORM\Column]
    #[Assert\NotBlank]
    #[Assert\Positive]
    private ?int $maxPositions = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updatedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;
        return $this;
    }

    public function getDepartment(): ?string
    {
        return $this->department;
    }

    public function setDepartment(string $department): static
    {
        $this->department = $department;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getRequirements(): ?string
    {
        return $this->requirements;
    }

    public function setRequirements(string $requirements): static
    {
        $this->requirements = $requirements;
        return $this;
    }

    public function getDuration(): ?string
    {
        return $this->duration;
    }

    public function setDuration(string $duration): static
    {
        $this->duration = $duration;
        return $this;
    }

    public function getStipend(): ?string
    {
        return $this->stipend;
    }

    public function setStipend(string $stipend): static
    {
        $this->stipend = $stipend;
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;
        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): static
    {
        $this->startDate = $startDate;
        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): static
    {
        $this->endDate = $endDate;
        return $this;
    }

    public function getApplicationDeadline(): ?\DateTimeInterface
    {
        return $this->applicationDeadline;
    }

    public function setApplicationDeadline(\DateTimeInterface $applicationDeadline): static
    {
        $this->applicationDeadline = $applicationDeadline;
        return $this;
    }

    public function getBenefits(): ?string
    {
        return $this->benefits;
    }

    public function setBenefits(string $benefits): static
    {
        $this->benefits = $benefits;
        return $this;
    }

    public function getMentorName(): ?string
    {
        return $this->mentorName;
    }

    public function setMentorName(string $mentorName): static
    {
        $this->mentorName = $mentorName;
        return $this;
    }

    public function getMentorEmail(): ?string
    {
        return $this->mentorEmail;
    }

    public function setMentorEmail(string $mentorEmail): static
    {
        $this->mentorEmail = $mentorEmail;
        return $this;
    }

    public function getMaxPositions(): ?int
    {
        return $this->maxPositions;
    }

    public function setMaxPositions(int $maxPositions): static
    {
        $this->maxPositions = $maxPositions;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }

    #[ORM\PreUpdate]
    public function setUpdatedAtValue(): void
    {
        $this->updatedAt = new \DateTime();
    }
} 