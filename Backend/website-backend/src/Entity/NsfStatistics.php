<?php

namespace App\Entity;

use App\Repository\NsfStatisticsRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=NsfStatisticsRepository::class)
 * @ApiResource(
 *     normalizationContext={"groups"={"nsf-stats:read"}},
 *     denormalizationContext={"groups"={"nsf-stats:write"}}
 * )
 */
class NsfStatistics
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"nsf-stats:read"})
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"nsf-stats:read", "nsf-stats:write"})
     */
    private ?string $statistic_name = null;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"nsf-stats:read", "nsf-stats:write"})
     */
    private ?string $value = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"nsf-stats:read", "nsf-stats:write"})
     */
    private ?string $description = null;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"nsf-stats:read", "nsf-stats:write"})
     */
    private ?int $year = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"nsf-stats:read", "nsf-stats:write"})
     */
    private ?string $chart_type = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"nsf-stats:read", "nsf-stats:write"})
     */
    private ?string $chart_data = null;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"nsf-stats:read", "nsf-stats:write"})
     */
    private ?\DateTimeImmutable $created_at = null;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"nsf-stats:read", "nsf-stats:write"})
     */
    private ?bool $is_active = true;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"nsf-stats:read", "nsf-stats:write"})
     */
    private ?int $display_order = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatisticName(): ?string
    {
        return $this->statistic_name;
    }

    public function setStatisticName(string $statistic_name): static
    {
        $this->statistic_name = $statistic_name;
        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): static
    {
        $this->value = $value;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): static
    {
        $this->year = $year;
        return $this;
    }

    public function getChartType(): ?string
    {
        return $this->chart_type;
    }

    public function setChartType(?string $chart_type): static
    {
        $this->chart_type = $chart_type;
        return $this;
    }

    public function getChartData(): ?string
    {
        return $this->chart_data;
    }

    public function setChartData(?string $chart_data): static
    {
        $this->chart_data = $chart_data;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;
        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): static
    {
        $this->is_active = $is_active;
        return $this;
    }

    public function getDisplayOrder(): ?int
    {
        return $this->display_order;
    }

    public function setDisplayOrder(?int $display_order): static
    {
        $this->display_order = $display_order;
        return $this;
    }
}
